const initialState = {
    works: [
      {
        title: "Designing Dashboards",
        discreption: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        year: 2020,
        type: "Dashboard",
        image: "./image/main/Designing.png",
      },
      {
        title: 'Vibrant Portraits of 2020',
        discreption:'2Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', 
        year: 2018,
        type: "Illustration",
        image: "./image/main/Vibrants.png",
      },
      {
        title: '36 Days of Malayalam type',
        discreption:'3Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', 
        year: 2018,
        type: "Typography",
        image: "./image/main/36day.png",
      },
    ]
  };
  
  const workReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default workReducer;