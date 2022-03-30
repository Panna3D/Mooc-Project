// import React from 'react';
// import PropType from 'prop-types';

// Pagination.propType = {
//     pagination: PropType.object.isRequired,
//     onPageChange: PropType.func,
// };

// Pagination.defaultProps = {
//     onPageChange: null,
// }

// const Pagination = (props) => {
//     const {pagination, onPageChange} = props;
//     const { _page, _limit, _totalRows } = pagination;
//     const totalPages = Math.ceil(_totalRows / _limit);

//     const handlePageChange = (newPage) => {
//         if(onPageChange){
//             onPageChange(newPage);
//         }
//     }

//     return (
//         <div>
//             <button
//                 // Disable button prev khi là trang số 1 (đầu tiên)
//                 // disabled = {_page <= 1}
//                 // onClick = {() => handlePageChange(_page - 1)}
//             >
//             Prev
//             </button>
//             <button
//                 // Disable button next khi là trang số 1 (đầu tiên)
//                 // disabled = {_page >= totalPages}
//                 // onClick = {() => handlePageChange(_page + 1)}
//             >
//             Prev
//             </button>
//         </div>
//     );
// };

// export default Pagination;