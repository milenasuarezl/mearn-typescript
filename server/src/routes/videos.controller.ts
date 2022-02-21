
import { RequestHandler} from "express";


export const getVideos: RequestHandler = (req, res) => {
    return res.json('getting videos');
}

