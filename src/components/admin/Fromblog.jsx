import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = "https://blogbackendss-1.onrender.com";

export default function BlogForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [token, setToken] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "Grovally",
    image: "",
    published: true,
  });

  const [loading, setLoading] = useState(false);
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // AUTH CHECK
  // =========================
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");

    if (!adminToken) {
      navigate("/admin/login");
      return;
    }

    setToken(adminToken);
  }, [navigate]);

  // =========================
  // LOAD BLOG FOR EDIT
  // =========================
  useEffect(() => {
    if (token && id) {
      loadBlog();
    }
  }, [token, id]);

  const loadBlog = async () => {
    try {
      setLoadingBlog(true);
      setError("");

      const response = await fetch(
        `${API}/api/blogs/admin/all`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
        return;
      }

      if (!response.ok) {
        throw new Error(
          `Failed to load blogs (${response.status})`
        );
      }

      const blogs = await response.json();

      const blog = blogs.find(
        (item) => String(item.id) === String(id)
      );

      if (!blog) {
        setError("Blog not found.");
        return;
      }

      setForm({
        title: blog.title || "",
        description: blog.description || "",
        content: blog.content || "",
        category: blog.category || "",
        author: blog.author || "Grovally",
        image: blog.image || "",
        published:
          blog.published !== undefined
            ? blog.published
            : true,
      });
    } catch (error) {
      console.error("Load blog error:", error);

      setError(
        "Blog load nahi ho pa raha. Backend check karo."
      );
    } finally {
      setLoadingBlog(false);
    }
  };

  // =========================
  // UPDATE FIELD
  // =========================
  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // =========================
  // SAVE BLOG
  // =========================
  const saveBlog = async (e) => {
    e.preventDefault();

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const url = id
        ? `${API}/api/blogs/${id}`
        : `${API}/api/blogs/`;

      const method = id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      // TOKEN EXPIRED
      if (response.status === 401) {
        localStorage.removeItem("adminToken");

        alert("Session expired. Please login again.");

        navigate("/admin/login");
        return;
      }

      let data = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        console.error("Backend error:", data);

        const message =
          data?.detail ||
          data?.message ||
          "Unable to save blog.";

        setError(message);
        alert(message);

        return;
      }

      console.log("Blog saved:", data);

      alert(
        id
          ? "Blog updated successfully!"
          : "Blog created successfully!"
      );

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Save blog error:", error);

      setError(
        "Backend server se connection nahi ho pa raha."
      );

      alert(
        "Backend server se connection nahi ho pa raha."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOADING
  // =========================
  if (id && loadingBlog) {
    return (
      <div className="min-h-screen bg-[#f5f6f8] flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-5" />

          <h2 className="text-xl font-bold text-gray-900">
            Loading Blog
          </h2>

          <p className="text-gray-500 mt-2">
            Please wait while we load your blog...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-gray-900">

      {/* =========================
          TOP BAR
      ========================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">

            <div className="flex items-center gap-4">

              <button
                type="button"
                onClick={() =>
                  navigate("/admin/dashboard")
                }
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-100 transition text-xl"
              >
                ←
              </button>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  Grovally Admin
                </p>

                <h1 className="text-xl sm:text-2xl font-bold">
                  {id ? "Edit Blog" : "Create Blog"}
                </h1>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  form.published
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span className="mr-2">●</span>

                {form.published
                  ? "Published"
                  : "Draft"}
              </span>

            </div>

          </div>
        </div>
      </header>

      {/* =========================
          MAIN
      ========================= */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* INTRO */}
        <div className="mb-8">
          <p className="text-gray-500 text-sm">
            {id
              ? "Update and manage your existing blog post."
              : "Create and publish a new blog post."}
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-5 flex gap-4">

            <div className="w-10 h-10 shrink-0 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              !
            </div>

            <div>
              <h3 className="font-bold text-red-800">
                Something went wrong
              </h3>

              <p className="text-sm text-red-600 mt-1">
                {error}
              </p>
            </div>

          </div>
        )}

        <form onSubmit={saveBlog}>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* =========================
                LEFT CONTENT
            ========================= */}
            <div className="lg:col-span-2 space-y-6">

              {/* BASIC INFORMATION */}
              <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8">

                <div className="mb-7">
                  <h2 className="text-lg font-bold">
                    Basic Information
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Add the main details of your blog.
                  </p>
                </div>

                <div className="space-y-6">

                  {/* TITLE */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Blog Title
                    </label>

                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) =>
                        updateField(
                          "title",
                          e.target.value
                        )
                      }
                      placeholder="Enter your blog title"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition"
                      required
                    />
                  </div>

                  {/* CATEGORY + AUTHOR */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Category
                      </label>

                      <input
                        type="text"
                        value={form.category}
                        onChange={(e) =>
                          updateField(
                            "category",
                            e.target.value
                          )
                        }
                        placeholder="Real Estate"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Author
                      </label>

                      <input
                        type="text"
                        value={form.author}
                        onChange={(e) =>
                          updateField(
                            "author",
                            e.target.value
                          )
                        }
                        placeholder="Author name"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition"
                        required
                      />
                    </div>

                  </div>

                </div>

              </section>

              {/* DESCRIPTION */}
              <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8">

                <div className="mb-6">
                  <h2 className="text-lg font-bold">
                    Short Description
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    A short summary that appears on blog cards.
                  </p>
                </div>

                <textarea
                  value={form.description}
                  onChange={(e) =>
                    updateField(
                      "description",
                      e.target.value
                    )
                  }
                  placeholder="Write a short description of your blog..."
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition resize-none"
                  required
                />

              </section>

              {/* CONTENT */}
              <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8">

                <div className="mb-6 flex items-start justify-between gap-4">

                  <div>
                    <h2 className="text-lg font-bold">
                      Blog Content
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Write the complete content of your blog.
                    </p>
                  </div>

                  <span className="hidden sm:block text-xs bg-gray-100 px-3 py-1.5 rounded-full text-gray-500">
                    Editor
                  </span>

                </div>

                <textarea
                  value={form.content}
                  onChange={(e) =>
                    updateField(
                      "content",
                      e.target.value
                    )
                  }
                  placeholder="Start writing your blog content..."
                  rows={22}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition resize-y leading-7"
                  required
                />

                <div className="mt-3 flex justify-between text-xs text-gray-400">
                  <span>
                    {form.content.length} characters
                  </span>

                  <span>
                    Plain text editor
                  </span>
                </div>

              </section>

            </div>

            {/* =========================
                RIGHT SIDEBAR
            ========================= */}
            <div className="space-y-6">

              {/* PUBLISH */}
              <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                <div className="flex items-center justify-between mb-5">

                  <div>
                    <h2 className="font-bold">
                      Publishing
                    </h2>

                    <p className="text-xs text-gray-500 mt-1">
                      Control blog visibility
                    </p>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      form.published
                        ? "bg-green-50 text-green-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    ●
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    updateField(
                      "published",
                      !form.published
                    )
                  }
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border transition ${
                    form.published
                      ? "border-green-200 bg-green-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >

                  <div className="text-left">

                    <p className="font-semibold text-sm">
                      {form.published
                        ? "Published"
                        : "Draft"}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {form.published
                        ? "Blog is visible to users."
                        : "Blog is saved as draft."}
                    </p>

                  </div>

                  <div
                    className={`w-12 h-7 rounded-full p-1 transition ${
                      form.published
                        ? "bg-black"
                        : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition ${
                        form.published
                          ? "translate-x-5"
                          : "translate-x-0"
                      }`}
                    />
                  </div>

                </button>

              </section>

              {/* IMAGE */}
              <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                <div className="mb-5">
                  <h2 className="font-bold">
                    Featured Image
                  </h2>

                  <p className="text-xs text-gray-500 mt-1">
                    Add your Cloudinary image URL
                  </p>
                </div>

                <input
                  type="url"
                  value={form.image}
                  onChange={(e) =>
                    updateField(
                      "image",
                      e.target.value
                    )
                  }
                  placeholder="https://res.cloudinary.com/..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition text-sm"
                  required
                />

                {/* PREVIEW */}
                <div className="mt-5">

                  {form.image ? (
                    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">

                      <img
                        src={form.image}
                        alt={
                          form.title ||
                          "Blog preview"
                        }
                        className="w-full h-52 object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display =
                            "none";
                        }}
                      />

                    </div>
                  ) : (
                    <div className="h-52 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">

                      <div className="text-4xl mb-2">
                        🖼️
                      </div>

                      <p className="text-sm">
                        Image preview
                      </p>

                    </div>
                  )}

                </div>

              </section>

              {/* ACTIONS */}
              <section className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >

                  {loading && (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}

                  {loading
                    ? id
                      ? "Updating..."
                      : "Publishing..."
                    : id
                    ? "Update Blog"
                    : "Publish Blog"}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/admin/dashboard")
                  }
                  disabled={loading}
                  className="w-full mt-3 py-3.5 rounded-xl border border-gray-200 font-semibold hover:bg-gray-100 transition disabled:opacity-50"
                >
                  Cancel
                </button>

              </section>

            </div>

          </div>

        </form>

      </main>
    </div>
  );
}