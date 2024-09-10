const {usersCollection} = require('../mongodb.js');

// Define the search stage for the aggregation pipeline
// we are using the default index and searching the name field
//SEARCH INDEX HAS TO BE CREATED BEFORE HAND IN ATLAS WITH THE NAME 'default'

const searchStage = (query) =>
    {
       return   {
          $search: {
            index: "default",
            text: {
              query: query,
              path: "name",
              fuzzy: {
                maxEdits: 2,
              }
            }
          }
        }
      
    };

const searchRoute = async (req, res, next) => {
    // get the query 
    const { query } = req.body.params;
    try {

        // use the aggregation pipeline to search the collection and limit to 5 results
        
        const results = await usersCollection.aggregate([searchStage(query)]).limit(10).toArray();  

        res.status(200).json(results);
    } catch (error) {    
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = searchRoute;