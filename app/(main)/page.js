import { redirect } from "next/navigation";

const DEFAULT_CATEGORY_ID = "2";

const HomePage = () => {
  redirect(`/category/${DEFAULT_CATEGORY_ID}`);
};

export default HomePage;
