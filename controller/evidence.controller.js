const EvidenceService=require("../services/evidence.services");

exports.evidence = async(req,res,next)=>{
    try{
        const {policeStation, crimeNumber, evidenceTypes,description}=req.body;
        
        console.log('Received incident data:', policeStation, crimeNumber, evidenceTypes,description);
        const uploadedFiles = req.body.uploadedFiles;
        const successRes=await EvidenceService.evidenceserve(policeStation, crimeNumber, evidenceTypes,description,uploadedFiles);
        res.json({status:true,succes:"evidence"})


    }catch(error){
        console.log(error)

    }
}