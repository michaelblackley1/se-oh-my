import OpenAI from "openai";

const generateImage = async (prompt: string) => {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
    organization: process.env.OPEN_AI_ORG_KEY,
  });

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  });
  const image_urls = response.data.map((data) => {
    return { url: data.url, caption: data.revised_prompt };
  });

  console.log("image_url", image_urls);

  return image_urls;
};

export default generateImage;
