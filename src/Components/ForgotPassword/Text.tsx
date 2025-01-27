import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ForgotPassword/text/ui/accordion";

const items = [
  {
    id: "1",
    title: "How to change Password?",
    content:
      "If you forgets you password just type in input the email from you account you will gets link",
  },
  {
    id: "2",
    title: "Where is mail with reset link?",
    content:
      "If you didn't, gets the mail, try to check a spam, probably it in this direction"
  },
  {
    id: "3",
    title: "I forgot a mail",
    content:
      "If you forgot a mail and password the situation will be more hard than common change password, try to write a Help",
  },
  {
    id: "4",
    title: "I forget my username",
    content:
      "Don't worry every user have a #id in the setting, public id is just you account id, secret id is important for recovery you account.Don't give it anyone who is not from User Help, User Helper always in conversation start will send you a origin conversation id which is auto generated, you always can check conversation id for know is a really User Helper chat with you",
  },
];

export default function TextFP() {
  return (
    <div className="space-y-4 text-gray-600 sm:mt:5 md:pt-0 sm:pt-4 md:pr-6">
      <h2 className="text-xl font-bold">Password Reset FAQ</h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="3">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="py-2">
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
