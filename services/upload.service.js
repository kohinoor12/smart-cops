// const xlsx = require('xlsx'); // Import the 'xlsx' library for Excel file processing
// const MyModel = require('../model/fileupload'); // Your Mongoose model for MongoDB

// module.exports = {
//   processUpload: async (file) => {
//     try {
//       // Process the Excel file
//       const workbook = xlsx.readFile(file.path);
//       const sheetName = workbook.SheetNames[0];
//       const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

//       // Save data to the database (assumes Mongoose schema is defined)
//       const result = await MyModel.create(data);

//       return { message: 'File uploaded and data saved successfully', data: result };
//     } catch (error) {
//       throw error;
//     }
//   },
// };
const csv = require('csv-parser'); // Import the 'csv-parser' library for CSV file processing
const fs = require('fs'); // File system module for reading files
const MyModel = require('../model/fileupload'); // Your Mongoose model for MongoDB

module.exports = {
  processUpload: async (file) => {
    try {
      const results = [];
      // Process the CSV file
      fs.createReadStream(file.path)
        .pipe(csv())
        .on('data', (data) => {
          // Process each row of CSV data and push it into the results array
          results.push(data);
        })
        .on('end', async () => {
          // Save data to the database (assumes Mongoose schema is defined)
          const result = await MyModel.create(results);
          return { message: 'File uploaded and data saved successfully', data: result };
        });

      return new Promise((resolve, reject) => {
        // Handle any errors during CSV processing
        process.on('unhandledRejection', (reason, promise) => {
          reject(reason);
        });
      });
    } catch (error) {
      throw error;
    }
  },
};
