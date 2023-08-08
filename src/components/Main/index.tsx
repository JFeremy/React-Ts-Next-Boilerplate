import { cn } from "@/lib/utils";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from 'react-icons/hi';

const Main = ({
  title = "NextJS boilerplate",
  description = "A simple project starter to work with TypeScript, React, NextJS and Styled Components",
}) => (
  <div>
    <img
      src="/images/logo-iceberg.svg"
      width="200"
      alt="Iceberg NextJS Boilerplate text and Iceberg Icon"
    />
    <h1 className={cn('text-lg')}>{title}</h1>
    <p>{description}</p>

    <Button color="dark">
      <p>Test</p>
      <HiOutlineArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </div >
);

export default Main;
