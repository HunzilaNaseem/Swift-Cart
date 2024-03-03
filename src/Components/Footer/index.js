
// import { Typography } from "antd";
// import React, { useState, useEffect } from 'react';
// import { Pagination } from 'antd';
// import { getAllProducts, getProductsByCategory, getCart } from '../../API/'  ; // Assuming the file is named api.js

//  function AppFooter() {

//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalProducts, setTotalProducts] = useState(0);
//     const [products, setProducts] = useState([]);
  
//     useEffect(() => {
//       fetchData();
//     }, [currentPage]);
  
//     const fetchData = async () => {
//       try {
//         const data = await getAllProducts(currentPage); // Assuming getAllProducts supports pagination
//         setProducts(data.results); // Assuming the API response contains paginated data in 'results' field
//         setTotalProducts(data.total); // Assuming the API response contains total number of products
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
  
//     const handlePageChange = (page) => {
//       setCurrentPage(page);
//     };
//   return (
//     <div>
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>{product.name}</li>
//       ))}
//     </ul>
    
//     <Pagination
//       current={currentPage}
//       total={totalProducts}
//       onChange={handlePageChange}
//       pageSize={10} // Specify the number of products per page
//     />
  // <div>
    // <div className="appFooter">
    //   <Typography.Link href="https://www.google.com" target={"_blank"}>
    //     Privacy Policy
    //   </Typography.Link>
    //   <Typography.Link href="https://www.google.com" target={"_blank"}>
    //     Terms & Conditions
    //   </Typography.Link>
    //   <Typography.Link href="https://www.google.com" target={"_blank"}>
    //     Return Policy
    //   </Typography.Link>
    //   <Typography.Link href="tel:+123456789" target={"_blank"}>
    //     +123456789
    //   </Typography.Link>
    // </div>
  // );

// }
// export default AppFooter;
// --------------------------------------------------------------
// import { Typography } from "antd";
// import React, { useState, useEffect } from 'react';
// import { Pagination  } from 'antd';
// import { getAllProducts } from '../../API/';


// function AppFooter() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [products, setProducts] = useState([]);

//   const [pageSize, setPageSize] = useState(4);
  

//   useEffect(() => {
    
//     fetchData(' https://dummyjson.com/');

//   }, [currentPage]);
//   // const handlePageChange = (page) => {
//   //   setCurrentPage(page);
//   // };
//   const handlePreviousClick = () => {
//     setCurrentPage(currentPage - 1);
//   };
//   const handleNextClick = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const fetchData = async () => {
//     try {
//       const response = await getAllProducts(currentPage);
//       const { results, total } = response; // Assuming API response has 'results' and 'total' fields
//       setProducts(results);
//       setTotalProducts(total);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <ul>
//         {products && products.map(product => (
//           <li key={product.id}>{product.name}</li>
//         ))}
//       </ul>
      
//       {/* <Pagination
//         current={currentPage}
//         total={totalProducts}
//         onChange={handlePageChange}
//         pageSize={5}
//       // /> */}

//        <Pagination
//         defaultCurrent={1} 
//         total={50} 
//         onChange={handlePageChange} 
//         onPreviousClick={handlePreviousClick}
//         onNextClick={handleNextClick}/>
//     ;
// export default App 
//     </div>
//   );
// }

// export default AppFooter;
// chstgpt 
import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { getAllProducts } from '../../API/';

function AppFooter() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const pageSize = 2; // Set your desired page size here

  useEffect(() => {
    console.log("chala");
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      // Assuming getAllProducts returns paginated data and total count
      const response = await getAllProducts(currentPage);
      const { results, total } = response;
      setProducts(response.products);
      console.log("getdata",response);
      setTotalProducts(total);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      
      {/* <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
       */}
      {/* <Pagination
        current={currentPage}
        total={products}
        onChange={handlePageChange}
        pageSize={pageSize}
      />

      {/* Optional: Add previous and next button functionality 
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button> */}
    </div>
  );
}

export default AppFooter;

