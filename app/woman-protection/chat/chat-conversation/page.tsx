import { useRouter } from 'next/router';

export default function ChatConversationPage() {
  const router = useRouter();
  const { chatId } = router.query;



  return (
    <div>
      <span>Chat com {chatId}</span>
    </div>
  );
}
