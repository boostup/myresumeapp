import dynamic from "next/dynamic";

const ThumbnailFromPdfBlob = dynamic(() => import("./ThumbnailFromPdfBlob"), {
  ssr: false,
});

function thumbnailtest() {
  return (
    <div>
      <button
        onClick={function () {
          if (typeof window !== "undedined") location.href = "/";
        }}
      >
        Leave
      </button>
      <ThumbnailFromPdfBlob />
    </div>
  );
}

export default thumbnailtest;
