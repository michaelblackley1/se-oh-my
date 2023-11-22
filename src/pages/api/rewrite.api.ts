import type { NextApiRequest, NextApiResponse } from "next";
import interestAreas, { InterestArea } from "../study-online/interestAreas";
import rewriteContent from "@/services/rewriteContent";

type ResponseData = {
  message: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const parsedBody = JSON.parse(req.body);

  const foundInterestArea = interestAreas.find((interestArea) => {
    return interestArea.urlSlug === parsedBody.interestArea;
  });

  console.log("foundInterestArea", foundInterestArea);

  if (!foundInterestArea) {
    res.status(404).json({ message: "Interest area not found" });
  }

  const result = await rewriteContent(
    foundInterestArea as InterestArea,
    parsedBody.keywords
  );
  res.status(200).json(result);
};

export default handler;
