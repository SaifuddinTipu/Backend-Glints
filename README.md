# **Backend API for Food Order Platform – Glints**

**Setup Environment:**

1. Clone the git repository from [https://github.com/SaifuddinTipu/Backend-Glints.git](https://github.com/SaifuddinTipu/Backend-Glints.git)
2. Run `npm install` to install all node dependencies required
3. Run `npm start` to run the project
4. The base URL for the project will be [http://localhost:3000/](http://localhost:3000/)
5. For production the base URL is [https://backend-glints.herokuapp.com/](https://backend-glints.herokuapp.com/)


**API Testing example with POSTMAN:** 

For more info please read [API_GUIDE.pdf](https://github.com/SaifuddinTipu/Backend-Glints/blob/master/API_GUIDE.pdf)

1) **List all restaurants are open at a certain datetime:**

Method: **GET**

URL: [https://backend-glints.herokuapp.com/api/restaurants/list-all-restaurants](https://backend-glints.herokuapp.com/api/restaurants/list-all-restaurants)

Body: select raw, type JSON

{

    "time": "2022-02-06 15:30:00"
    
}


2) **List top Y restaurants that have more or less than x number of dishes within a price range:**

Method: **GET**

URL: [https://backend-glints.herokuapp.com/api/restaurants/list-top-restaurants](https://backend-glints.herokuapp.com/api/restaurants/list-top-restaurants)

Body: select raw, type JSON

{

    "max_numof_restaurants": 5,
    
    "unit": "less-than",
    
    "dish_quantity": 5,
    
    "min_price": 5,
    
    "max_price": 20
    
} 


In unit please use "less-than" or "more-than"


3) **Search for restaurants or dishes by name, ranked by relevance to search term:**

Method: **GET**

URL: [https://backend-glints.herokuapp.com/api/restaurants/search-restaurants](https://backend-glints.herokuapp.com/api/restaurants/search-restaurants)

Body: select raw, type JSON

{

    "name": "Sushi"
    
}


4) **Process a user purchasing a dish from a restaurant, handling all relevant data changes in an**** atomic transaction:**

Method: **POST**

URL: [https://backend-glints.herokuapp.com/api/restaurants/list-top-restaurants](https://backend-glints.herokuapp.com/api/restaurants/list-top-restaurants)

Body: select raw, type JSON

{

    "user_id": "2",
    
    "restaurant_id": "61ff23d51923b91a6fa80c63",
    
    "dishName": "La Romaine Braisée au Fond de Veau",
    
    "restaurantName": "'Ulu Ocean Grill and Sushi Lounge",
    
    "transactionAmount": 10.59,
    
    "transactionDate": "02/10/2020 04:09 AM"
    
}
