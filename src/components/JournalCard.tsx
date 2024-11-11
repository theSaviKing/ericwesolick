import {
    Card,
    CardHeader,
    CardBody,
    Divider,
    Link,
    Button,
} from "@nextui-org/react";

export default function JournalCard({
    image,
    title,
    description,
    link,
    linkText,
    downloadFilename,
}: {
    image?: React.ReactNode;
    title: string;
    description?: React.ReactNode;
    link: string;
    linkText: string;
    downloadFilename?: string;
}) {
    return (
        <Card className="rounded-small bg-background">
            <CardHeader className="flex flex-col p-0">
                {image}
                <p className="text-balance p-3 font-display text-xl font-bold">
                    {title}
                </p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col gap-4">{description}</CardBody>
            <Button
                as={Link}
                href={link}
                color="primary"
                className="rounded-none"
                download={downloadFilename ? downloadFilename : undefined}
                target="_blank"
            >
                {linkText}
            </Button>
        </Card>
    );
}
