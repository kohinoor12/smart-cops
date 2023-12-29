// // const Offender = require("../model/Offender");

// // const addOffender = async (offenderData) => {
// //   try {
// //     const newOffender = new Offender(offenderData);
// //     await newOffender.save();
// //     return newOffender;
// //   } catch (error) {
// //     throw new Error(error.message);
// //   }
// // };

// // const searchOffenders = async (searchQuery) => {
// //   try {
// //     const searchResults = await Offender.find({
// //       $text: { $search: searchQuery },
// //     });
// //     return searchResults;
// //   } catch (error) {
// //     throw new Error(error.message);
// //   }
// // };

// // const searchVisitors = async (searchQuery) => {
// //   try {
// //     const searchResults = await Offender.find({
// //       $text: { $search: searchQuery },
// //     });
// //     return searchResults;
// //   } catch (error) {
// //     throw new Error(error.message);
// //   }
// // };

// // module.exports = {
// //   addOffender,
// //   searchOffenders,
// //   searchVisitors,
// // }
// const Offender = require("../model/Offender");
// class OffenderService {
//   static async addOffender(
//     name,
//     aliasName,
//     crimeHead,
//     crimeSubHead,
//     mo,
//     crimeNumber,
//     fpsNumber,
//     state,
//     district,
//     policeStation,
//     latLon
//   ) {
//     try {
//       // const createincdata=new incidentmodel({incidentType,description});
//       // return await createincdata.save();
//       console.log("Creating offender data:", {
//         name,
//         aliasName,
//         crimeHead,
//         crimeSubHead,
//         mo,
//         crimeNumber,
//         fpsNumber,
//         state,
//         district,
//         policeStation,
//         latLon,
//       });

//       const createOffenderData = new Offender({
//         name,
//         aliasName,
//         crimeHead,
//         crimeSubHead,
//         mo,
//         crimeNumber,
//         fpsNumber,
//         state,
//         district,
//         policeStation,
//         latLon,
//       });
//       console.log("Offender data before save:", createOffenderData);

//       const savedOffender = await createOffenderData.save();
//       console.log("Incident data after save:", savedOffender);

//       return savedOffender;
//     } catch (err) {
//       console.error("Error in incident service:", err);
//       throw new Error("Failed to create incident");
//     }
//   }
//   static async processOffenderUpload(file) {
//     try {
//       const results = [];
//       // Process the CSV file
//       fs.createReadStream(file.path)
//         .pipe(csv())
//         .on('data', (data) => {
//           // Process each row of CSV data and push it into the results array
//           results.push(data);
//         })
//         .on('end', async () => {
//         //   // Save data to the database (assumes Mongoose schema is defined)
//         //   const result = await Offender.create(results);
//         //   return { message: 'File uploaded and data saved successfully', data: result };
//         // });
//         const savedData = [];
//   for (const data of results) {
//     const savedOffender = await Offender.create(data);
//     savedData.push(savedOffender);
//   }
//   return { message: 'File uploaded and data saved successfully', data: savedData };
// });

//   //     return new Promise((resolve, reject) => {
//   //       // Handle any errors during CSV processing
//   //       process.on('unhandledRejection', (reason, promise) => {
//   //         reject(reason);
//   //       });
//   //     });
//   //   } catch (error) {
//   //     throw error;
//   //   }
//   // }
//   return new Promise(async (resolve, reject) => {
//     try {
//       fs.createReadStream(file.path)
//         .pipe(csv())
//         .on('data', (data) => {
//           // Process each row of CSV data and push it into the results array
//           results.push(data);
//         })
//         .on('end', async () => {
//           // Save data to the database (assumes Mongoose schema is defined)
//           const savedData = [];
//           for (const data of results) {
//             const savedOffender = await Offender.create(data);
//             savedData.push(savedOffender);
//           }
//           resolve({ message: 'File uploaded and data saved successfully', data: savedData });
//         });
//     } catch (error) {
//       reject(error);
//     }
//     });
// }

//   }
// }




// module.exports = OffenderService;

const fs = require('fs');
const csv = require('csv-parse');
const Offender = require('../model/Offender');

class OffenderService {
  static async addOffender(
    name,
    aliasName,
    crimeHead,
    crimeSubHead,
    mo,
    crimeNumber,
    fpsNumber,
    state,
    district,
    policeStation,
    latLon
  ) {
    try {
      console.log('Creating offender data:', {
        name,
        aliasName,
        crimeHead,
        crimeSubHead,
        mo,
        crimeNumber,
        fpsNumber,
        state,
        district,
        policeStation,
        latLon,
      });

      const createOffenderData = new Offender({
        name,
        aliasName,
        crimeHead,
        crimeSubHead,
        mo,
        crimeNumber,
        fpsNumber,
        state,
        district,
        policeStation,
        latLon,
      });

      console.log('Offender data before save:', createOffenderData);

      const savedOffender = await createOffenderData.save();
      console.log('Offender data after save:', savedOffender);

      return savedOffender;
    } catch (err) {
      console.error('Error in offender service:', err);
      throw new Error('Failed to create offender');
    }
  }

  static processOffenderUpload(file) {
    return new Promise(async (resolve, reject) => {
      try {
        const results = [];
        if (!file || !file.path) {
          throw new Error('Invalid file or file path');
        }
    
        console.log('File path before creating read stream:', file.path);
        console.log('File path:', file.path);

        fs.createReadStream(file.path)
        .pipe(csv.parse())
          .on('data', (data) => {
            console.log('CSV Data is this:', data);
            results.push(data);
          })
          .on('end', async () => {
            const savedData = [];
            console.log("Results is:: ");
            console.log(results);

            for (const data of results.slice(1)) {

              const createOffenderData = new Offender({
                // name: data.name,
                // aliasName: data.aliasName,
                // crimeHead: data.crimeHead,
                // crimeSubHead: data.crimeSubHead,
                // mo: data.mo,
                // crimeNumber: data.crimeNumber,
                // fpsNumber: data.fpsNumber,
                // state: data.state,
                // district: data.district,
                // policeStation: data.policeStation,
                // latLon: data.latLon,
                name: data[0],
    aliasName: data[1],
    crimeHead: data[2],
    crimeSubHead: data[3],
    mo: data[4],
    crimeNumber: data[5],
    fpsNumber: data[6],
    state: data[7],
    district: data[8],
    policeStation: data[9],
    latLon: data[10],
    highqualityphotographs: data[11]
              });
              console.log(data.latLon);
              console.log(data.policestation);
          //     // const savedOffender = await Offender.create(data);
          //     // console.log('Saving Offender Data:', data);
          //     // savedData.push(savedOffender);
          //     console.log('CSV Row Data:', data);

          // const createOffenderData = new Offender({
          //   name: data.name,
          
          //   aliasName: data.aliasName,
          //   crimeHead: data.crimeHead,
          //   crimeSubHead: data.crimeSubHead,
          //   mo: data.mo,
          //   crimeNumber: data.crimeNumber,
          //   fpsNumber: data.fpsNumber,
          //   state: data.state,
          //   district: data.district,
          //   policeStation: data.policeStation,
          //   latLon: data.latLon,
          // });

          console.log('Offender data before save:', createOffenderData);

          const savedOffender = await createOffenderData.save();
          console.log('Offender data after save:', savedOffender);

          savedData.push(savedOffender);
            }
            console.log('Data Saved to Database:', savedData);

            resolve({ message: 'File uploaded and data saved successfully', data: savedData });
          });
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = OffenderService;
