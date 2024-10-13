import Text from '@/Components/atom/Text';
import './PaginationStyle.scss';
import Button from '@/Components/atom/Button';
import arrowLeft from '@/assets/images/arrow-left.svg';
import arrowRight from '@/assets/images/arrow-right.svg';
import arrowdowm from '@/assets/images/arrow-down.svg';
import ImageAtom from '@/Components/atom/Image';

export default function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination__result">
        {' '}
        <Text>{'Showing'}</Text>
        <div className='pagination__select__container'>
          <select className="pagination__result-select">
            <option value={10}>{'10'}</option>
            <option value={20}>{'20'}</option>
            <option value={50}>{'50'}</option>
            <option value={100}>{'100'}</option>
          </select>
          <ImageAtom width={12} height={12} alt="select icon" src={arrowdowm} />
        </div>
        <Text>{`out of ${100}`}</Text>
      </div>
      <div className="pagination__control">
        <Button
          className="pagination__btn"
          imageAlt="arrow btn"
          imageHeight={11.21}
          imageWidth={6.75}
          imageSrc={arrowLeft}
        />

        <div className="pagination__page">
          <Text className="active">{1}</Text>
          <Text>{2}</Text>
          <Text>{3}</Text>
          <Text>{'...'}</Text>
          <Text>{12}</Text>
          <Text>{13}</Text>
          <Text>{14}</Text>
        </div>

        <Button
          className="pagination__btn"
          imageAlt="arrow btn"
          imageHeight={11.21}
          imageWidth={6.75}
          imageSrc={arrowRight}
        />
      </div>
    </div>
  );
}
