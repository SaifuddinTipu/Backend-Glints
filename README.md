# **Backend API for Food Order Platform – Glints**

Setup Environment:

1. Clone the git repository from [https://github.com/SaifuddinTipu/Backend-Glints.git](https://github.com/SaifuddinTipu/Backend-Glints.git)
2. Run `npm install` to install all node dependencies required
3. Run `npm start` to run the project
4. The base URL for the project will be [http://localhost:3000/](http://localhost:3000/)
5. For production the base URL is [https://backend-glints.herokuapp.com/](https://backend-glints.herokuapp.com/)

API Testing example with POSTMAN:

1. **List all restaurants are open at a certain datetime:**

Method: **GET**

URL: [https://backend-glints.herokuapp.com/api/restaurants/list-all-restaurants](https://backend-glints.herokuapp.com/api/restaurants/list-all-restaurants)

Body: select raw, type JSON

{

    &quot;time&quot;: &quot;2022-02-06 15:30:00&quot;

}

![](RackMultipart20220206-4-17lumc3_html_c9e1e09d2afc2c8f.png)

1. **List top Y restaurants that have more or less than x number of dishes within a price range:**

Method: **GET**

URL: [https://backend-glints.herokuapp.com/api/restaurants/list-top-restaurants](https://backend-glints.herokuapp.com/api/restaurants/list-top-restaurants)

Body: select raw, type JSON

{

    &quot;max\_numof\_restaurants&quot;: 5,

    &quot;unit&quot;: &quot;less-than&quot;,

    &quot;dish\_quantity&quot;: 5,

    &quot;min\_price&quot;: 5,

    &quot;max\_price&quot;: 20

}

In unit please use &quot;less-than&quot; or &quot;more-than&quot;

![](RackMultipart20220206-4-17lumc3_html_620f9e47612a91d6.png)

1. **Search for restaurants or dishes by name, ranked by relevance to search term:**

Method: **GET**

URL: [https://backend-glints.herokuapp.com/api/restaurants/search-restaurants](https://backend-glints.herokuapp.com/api/restaurants/search-restaurants)

Body: select raw, type JSON

{

    &quot;name&quot;: &quot;Sushi&quot;

}

![](RackMultipart20220206-4-17lumc3_html_b8025196ac42403d.png)

1. **Process a user purchasing a dish from a restaurant, handling all relevant data changes in an**** atomic transaction:**

Method: **POST**

URL: [https://backend-glints.herokuapp.com/api/restaurants/list-top-restaurants](https://backend-glints.herokuapp.com/api/restaurants/list-top-restaurants)

Body: select raw, type JSON

{

    &quot;user\_id&quot;: &quot;2&quot;,

    &quot;restaurant\_id&quot;: &quot;61ff23d51923b91a6fa80c63&quot;,

    &quot;dishName&quot;: &quot;La Romaine Braisée au Fond de Veau&quot;,

    &quot;restaurantName&quot;: &quot;&#39;Ulu Ocean Grill and Sushi Lounge&quot;,

    &quot;transactionAmount&quot;: 10.59,

    &quot;transactionDate&quot;: &quot;02/10/2020 04:09 AM&quot;

}

![](RackMultipart20220206-4-17lumc3_html_fbf212b37d8cb2ec.png)