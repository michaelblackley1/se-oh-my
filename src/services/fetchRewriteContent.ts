import { InterestArea } from "@/pages/study-online/interestAreas";

const fetchRewriteContent = async (
  interestArea: InterestArea,
  keywords: string
) => {
  return fetch("/api/rewrite", {
    method: "POST",
    body: JSON.stringify({ interestArea: interestArea.urlSlug, keywords }),
  }).then((res) => res.json());
};

export default fetchRewriteContent;
