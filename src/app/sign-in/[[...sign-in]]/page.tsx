import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SignIn",
};

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn appearance={{ variables: { colorPrimary: "#0f172a" } }} />
    </div>
  );
};

export default SignInPage;
