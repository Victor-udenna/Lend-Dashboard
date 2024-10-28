import Text from '@/Components/atom/Text';
import './PaginationStyle.scss';
import Button from '@/Components/atom/Button';
import arrowLeft from '@/assets/images/arrow-left.svg';
import arrowRight from '@/assets/images/arrow-right.svg';
import arrowdowm from '@/assets/images/arrow-down.svg';
import ImageAtom from '@/Components/atom/Image';

interface Ipagination {
  readonly totalCount: number;
  readonly currentPage: number;
  readonly itemsPerPage: number;
  readonly onPageChange: (page: number) => void;
  readonly onItemsPerPageChange: (items: number) => void;
}

export default function Pagination({
  totalCount,
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: Ipagination) {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onItemsPerPageChange(parseInt(e.target.value, 10));
  };


  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1, 2, 3);

      if (currentPage > 4) {
        pages.push('...');
      }

      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage);
      }

      if (currentPage < totalPages - 3) {
        pages.push('...');
      }

      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <div className="pagination__result">
        <Text>{'Showing'}</Text>
        <div className="pagination__select__container">
          <select className="pagination__result-select" value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>{'10'}</option>
            <option value={20}>{'20'}</option>
            <option value={50}>{'50'}</option>
            <option value={100}>{'100'}</option>
          </select>
          <ImageAtom width={12} height={12} alt="select icon" src={arrowdowm} />
        </div>
        <Text>{`out of ${totalCount}`}</Text>
      </div>
      <div className="pagination__control">
        <Button
          className="pagination__btn"
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          imageAlt="arrow btn"
          imageHeight={11.21}
          imageWidth={6.75}
          imageSrc={arrowLeft}
        />

        <div className="pagination__page">
          {generatePageNumbers().map((page, index) => (
            <Text
              key={index}
              className={currentPage === page ? 'active' : ''}
              onClick={() => typeof page === 'number' && onPageChange(page)}
            >
              {page}
            </Text>
          ))}
        </div>

        <Button
          className="pagination__btn"
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          imageAlt="arrow btn"
          imageHeight={11.21}
          imageWidth={6.75}
          imageSrc={arrowRight}
        />
      </div>
    </div>
  );
}
