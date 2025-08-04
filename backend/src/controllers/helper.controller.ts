import { Request, Response } from 'express';
import HelperModel from '../models/helper.model'; // your Mongoose model

export const createHelper = async (req: Request, res: Response) => {
  try {
    const files = req.files as {
      [fieldname: string]: Express.Multer.File[];
    };
    console.log(files);
    const photoUrl = files['photo']?.[0]?.path || null;
    const kycUrl = files['kycDocument']?.[0]?.path || null;
    const additionalUrl = files['additionalDocuments']?.[0]?.path || null;
    const length = await HelperModel.countDocuments({});
    const helper = await HelperModel.create({
      ...req.body,
      employeeId: length + 1,
      photo: photoUrl,
      kycDocument: kycUrl,
      additionalDocuments: additionalUrl,
    });
    res.status(201).json({
        fullName : helper.fullName,
        typeOfService: helper.typeOfService,
        employeeId : helper.employeeId,

    });
  } catch (error) {
    res.status(500).json({ message: 'Upload failed', error });
  }
};

export const getHelpers = async (req: Request, res: Response) => {
    try{
        const sort = req.query.sort as string | undefined;
        const search = req.query.search as string | undefined;
        let filter: any = {};
        
        if(search){
          const regex = new RegExp(search,'i');
          filter = {
            $or: [
              {fullName: regex},
              {employeeId: isNaN(+search) ? -1 : +search},
              {phone: regex}
            ]
          }
        }
        let query = HelperModel.find(filter);
        if(sort){
          query = query.sort({[sort]:1});
        }
        const helpers = await query;
        if(helpers.length === 0 && !search){
            res.status(404).json({message: 'No helpers found'});
        }else{
            res.status(200).json(helpers);
        }

    }catch(error){
        res.status(500).json({message: 'Failed to get helpers', error});
    }
}

export const getCount = async (req: Request, res: Response)=>{
  try{
    const length = await HelperModel.countDocuments({});
    res.status(200).json({count: length});
  }catch(error){
    res.status(500).json({message:'Failed to get count',error});
  }
  
}