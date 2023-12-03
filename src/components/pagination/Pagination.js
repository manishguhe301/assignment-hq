import { getTotalPages } from '../../utilities/Paging';
import './pagination.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const Pagination = ({ usersLength, setPage, page, deleteSelected }) => {
  const totalPages = getTotalPages(usersLength);
  const changePage = (index) => {
    setPage(index);
  };

  const navigatePage = (index) => {
    if (index < 1) {
      index = 1;
    } else if (index > totalPages) {
      index = totalPages;
    }
    setPage(index);
  };

  let pages = [];
  pages.push(
    <div
      key={-3}
      className={`${'page'} ${page === 1 ? 'disabled' : ''}`}
      onClick={() => changePage(1)}
    >
      <KeyboardDoubleArrowLeftIcon />
    </div>
  );
  pages.push(
    <div
      key={-2}
      className={`${'page'} ${page === 1 ? 'disabled' : ''}`}
      onClick={() => navigatePage(page - 1)}
    >
      <ArrowBackIosNewRoundedIcon />
    </div>
  );
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <div
        key={i}
        onClick={() => changePage(i)}
        className={`${'page'} ${page === i ? 'selected' : ''}`}
      >
        {i}
      </div>
    );
  }
  pages.push(
    <div
      key={-1}
      className={`${'page'} ${page === totalPages ? 'disabled' : ''}`}
      onClick={() => navigatePage(page + 1)}
    >
      <ArrowForwardIosRoundedIcon />
    </div>
  );
  pages.push(
    <div
      key={0}
      className={`${'page'} ${page === totalPages ? 'disabled' : ''}`}
      onClick={() => changePage(totalPages)}
    >
      <KeyboardDoubleArrowRightIcon />
    </div>
  );

  return (
    <div className={'paginationContainer'}>
      <button className={'delete'} onClick={() => deleteSelected()}>
        Delete Selected
      </button>
      <div className={'pagination'}>{pages}</div>
    </div>
  );
};

export default Pagination;
