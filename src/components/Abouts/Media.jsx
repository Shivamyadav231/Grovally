import { useState } from "react";

export default function Media() {
  const [files, setFiles] = useState([]);

  const handleFiles = (event) => {
    const selected = Array.from(event.target.files).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
    }));
    setFiles((current) => [...current, ...selected]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white px-4 py-10 sm:px-6 lg:px-12">
      <section className="mx-auto max-w-6xl space-y-10 rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-red-500">Media Upload</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Upload your photos and preview them instantly
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-300">
            Select one or more images from your computer. The files will appear immediately in the preview gallery below. This page is built for quick internal content upload and review.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-black/30">
          <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-white/20 bg-white/5 px-6 py-12 text-center transition hover:border-red-500/60 hover:bg-white/10">
            <span className="text-xl font-semibold text-white">Drag & drop files here</span>
            <span className="text-sm text-slate-400">or click to browse images</span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFiles}
              className="hidden"
            />
          </label>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {files.length === 0 ? (
              <div className="col-span-full rounded-3xl border border-dashed border-white/20 bg-slate-950/70 p-8 text-center text-slate-400">
                No photos uploaded yet.
              </div>
            ) : (
              files.map((file, index) => (
                <div key={`${file.name}-${index}`} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-xl shadow-black/30">
                  <img src={file.url} alt={file.name} className="h-64 w-full object-cover" />
                  <div className="space-y-2 p-4">
                    <p className="font-semibold text-white">{file.name}</p>
                    <p className="text-sm text-slate-400">{(file.size / 1024).toFixed(1)} KB</p>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{file.type || "image"}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
