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
  status: string;
}

export default function DashboardCard(props: Props) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [isModalOpenEdit, setModalOpenEdit] = useState(false);

  const handleOpenModalEdit = () => {
    setModalOpenEdit(true);
  };

  const handleCloseModalEdit = () => {
    setModalOpenEdit(false);
  };

  return (
    <div className="flex content-center justify-center m-4">
      <Card className="w-[300px] h-[320px] flex flex-col justify-between items-center">
        <CardHeader className="flex flex-col items-center w-full ">
          <div className="flex h-24">
            <Image
              alt={props.altImg}
              src={props.img}
              width={250}
              height={90}
              className="rounded-full w-24"
            />
          </div>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>
            <span>{props.status}</span>
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-evenly w-full">
          <Button
            className="bg-red-900 hover:bg-red-700 px-6"
            onClick={handleOpenModalEdit}
          >
            Editar
          </Button>
          <Button className="px-6" onClick={handleOpenModal}>
            Entrar
          </Button>
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

      {isModalOpenEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-11/12 max-w-6xl">
            <button className="float-right" onClick={handleCloseModalEdit}>
              Close
            </button>
            <p>Desenvolvimento...</p>
          </div>
        </div>
      )}
    </div>
  );
}
