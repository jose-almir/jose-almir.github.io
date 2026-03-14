import Link from "next/link";
import styles from "./Pagination.module.scss";

export function Pagination({ currentPage, totalPages, baseUrl = "/blog" }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      {!isFirstPage && (
        <Link 
          href={currentPage === 2 ? baseUrl : `${baseUrl}/page/${currentPage - 1}`}
          className={styles.pageButton}
        >
          <i className="bi bi-chevron-left"></i> Anterior
        </Link>
      )}

      <div className={styles.pageNumbers}>
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const isCurrent = page === currentPage;
          const href = page === 1 ? baseUrl : `${baseUrl}/page/${page}`;

          return (
            <Link 
              key={page} 
              href={href}
              className={`${styles.pageNumber} ${isCurrent ? styles.active : ""}`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {!isLastPage && (
        <Link 
          href={`${baseUrl}/page/${currentPage + 1}`}
          className={styles.pageButton}
        >
          Próximo <i className="bi bi-chevron-right"></i>
        </Link>
      )}
    </div>
  );
}
