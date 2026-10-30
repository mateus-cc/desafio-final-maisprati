export function Pagination({ currentPage, changePage, totalPages }) {
  return (
    <div className="mt-5 flex items-center justify-center gap-2">
      {/* ANTERIOR */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
        className="rounded-lg border border-brow-300 px-3 py-2 text-sm text-brow-200 transition-colors hover:border-gold-500 hover:text-gold-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ←
      </button>

      {/* NÚMEROS */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => changePage(page)}
            className={`h-9 w-9 rounded-lg border text-sm transition-colors ${
              currentPage === page
                ? "border-gold-500 bg-gold-500 text-gray-900"
                : "border-brow-300 text-brow-200 hover:border-gold-500 hover:text-gold-500"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* PRÓXIMO */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
        className="rounded-lg border border-brow-300 px-3 py-2 text-sm text-brow-200 transition-colors hover:border-gold-500 hover:text-gold-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        →
      </button>
    </div>
  );
}
