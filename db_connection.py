import pymongo

def get_data_mongo():
    try:
        # Connect to MongoDB
        client = pymongo.MongoClient("mongodb+srv://vivek:vivek1702@cluster0.fdjrlyn.mongodb.net/crypto_data")
        
        # Check if the connection was successful
        if not client:
            print("Failed to connect to MongoDB.")
            return None
        
        # Get the database and collection
        db = client["crypto_data"]
        pairs_collection = db["pairs"]
        
        # Check if the collection exists
        if pairs_collection is None:
            print("Collection 'pairs' not found in the 'crypto_data' database.")
            return None
        
        # Define projection to include only "volume" and "priceChange" fields
        projection = {"volume": 1, "priceChange": 1, "_id": 0}
        
        # Find documents in the collection with specified projection
        cursor = pairs_collection.find({}, projection)
        
        # Initialize an empty list to store results
        results = []
        
        # Iterate over the cursor and extract necessary fields
        for doc in cursor:
            result = {
                "volume": doc.get("volume", {}),
                "priceChange": doc.get("priceChange", {})
            }
            results.append(result)
        
        return results
    
    except pymongo.errors.ServerSelectionTimeoutError as e:
        print("Error: Server selection timeout:", e)
        return None
    except pymongo.errors.ConnectionFailure as e:
        print("Error: Failed to connect to MongoDB server:", e)
        return None
    except Exception as e:
        print("Error fetching data from MongoDB:", e)
        return None
