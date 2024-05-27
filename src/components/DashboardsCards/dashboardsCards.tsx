"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
  CardDescription,
} from "../ui/card";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  altImg: string;
  img: string;
  linkBI: string;
}

export default function DashboardCard(props: Props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex content-center justify-center m-4">
      <Card className="w-56 flex flex-col justify-center items-center">
        <CardHeader className="flex flex-col justify-center items-center">
          <Image
            alt={props.altImg}
            src={props.img}
            width={200}
            height={50}
            className="h-12"
          />
          <CardTitle>{props.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{props.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-around align-center">
          <Button onClick={handleOpenModal}>Entrar</Button>
        </CardFooter>
      </Card>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-11/12 max-w-6xl">
            <button className="float-right" onClick={handleCloseModal}>
              Close
            </button>
            <iframe className="w-full h-[600px]" src={props.linkBI}></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
