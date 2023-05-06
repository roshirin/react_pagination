import classNames from 'classnames';
import { PageLink } from '../PageLink/PageLink';

type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(total / perPage);
  const pages = Array.from(
    { length: pagesCount },
    (_, index) => index + 1,
  );

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === pagesCount;

  const hanlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const hanleNextPage = () => {
    if (currentPage < pagesCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <ul className="pagination">
      <li
        className={classNames(
          'page-item',
          { disabled: isPrevDisabled },
        )}
      >
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={isPrevDisabled}
          onClick={hanlePrevPage}
        >
          «
        </a>
      </li>
      {pages.map(page => (
        <li
          className={classNames(
            'page-item',
            { active: page === currentPage },
          )}
          key={page}
        >
          <PageLink
            page={page}
            onClick={() => onPageChange(page)}
          />
        </li>
      ))}
      <li
        className={classNames(
          'page-item',
          { disabled: isNextDisabled },
        )}
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={isNextDisabled}
          onClick={hanleNextPage}
        >
          »
        </a>
      </li>
    </ul>
  );
};