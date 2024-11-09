import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
} from "@nextui-org/react";

export default function NextCard({
    imgUrl,
    title,
    description,
    link,
    linkText,
    download = false,
}: {
    imgUrl: string;
    title: string;
    description: React.ReactNode;
    link: string;
    linkText: string;
    download?: boolean;
}) {
    return (
        <Card className="dark" radius="sm">
            <CardHeader>
                <Image></Image>
                <p className="text-balance font-display text-xl font-bold">
                    Byzantine Rite offered at the University of Mary
                </p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-4">
                <p>
                    The University of Mary shows different religious practices
                    by bringing in a Byzantine Catholic priest to perform the
                    Ukrainian Rite at the University Chapel.
                </p>
                <p className="italic">Written for the UMary Encounter</p>
            </CardBody>
            <Divider />
            <CardFooter>foott</CardFooter>
        </Card>
    );
}
