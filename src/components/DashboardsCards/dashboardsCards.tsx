import Link from "next/link";
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
  altImg?: string;
  img?: string;
  linkBI: string;
}

export default function DashboardCard(props: Props) {
  return (
    <div>
      <Card className="w-56 mb-6 flex flex-col justify-center items-center">
        <CardHeader className="flex flex-col justify-center items-center">
          <Image
            alt="{props.altImg}"
            src="{props.img}"
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
          <Button asChild>
            <Link href={props.linkBI}>Entrar</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
