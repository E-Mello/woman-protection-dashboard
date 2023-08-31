import { Chat } from '@/types'; // Certifique-se de importar o tipo Chat ou similar
import Link from 'next/link';

export default function ChatPage() {
  // Exemplo de lista de chats pendentes
  const pendingChats: Chat[] = [
    {
      id: '1',
      userName: 'Usuário 1',
      status: 'pendente',
    },
    {
      id: '2',
      userName: 'Usuário 2',
      status: 'pendente',
    },
    {
      id: '3',
      userName: 'Usuário 3',
      status: 'pendente',
    },
    {
      id: '4',
      userName: 'Usuário 4',
      status: 'pendente',
    },
    {
      id: '5',
      userName: 'Usuário 5',
      status: 'pendente',
    },
  ];

  return (
    <div>
      <h1>Chats Pendentes</h1>
      <ul>
        {pendingChats.map((chat) => (
          <li key={chat.id}>
            <Link href={`/app/woman-protection/chat/chat-conversation/${chat.id}`}>Chat com {chat.userName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
