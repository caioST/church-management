import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { MessageSquare, Send, Mail, Bell, Plus, Users, Calendar } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: 'Mudanças no culto dominical',
    content: 'A partir da próxima semana, o culto de domingo começará às 10h30 em vez das 10h.',
    date: '2025-01-26',
    type: 'Importante',
    recipients: 185
  },
  {
    id: 2,
    title: 'Inscrição para piquenique na igreja',
    content: 'Estão abertas as inscrições para o piquenique anual da igreja, que acontecerá no dia 15 de fevereiro. Por favor, inscreva-se na recepção.',
    date: '2025-01-25',
    type: 'Evento',
    recipients: 185
  },
  {
    id: 3,
    title: 'Pedido de Oração',
    content: 'Por favor, mantenham a família Johnson em suas orações enquanto eles atravessam este momento difícil.',
    date: '2025-01-24',
    type: 'Oração',
    recipients: 185
  },
  {
    id: 4,
    title: 'Agradecimento aos Voluntários',
    content: 'Agradecemos a todos os voluntários que ajudaram no evento de interação com a comunidade no último fim de semana.',
    date: '2025-01-23',
    type: 'Geral',
    recipients: 42
  },
];

const newsletters = [
  {
    id: 1,
    title: 'Boletim informativo semanal - 26 de janeiro',
    sent: '2025-01-26',
    opens: 142,
    clicks: 38,
    status: 'Enviado'
  },
  {
    id: 2,
    title: 'Atualização mensal - Janeiro de 2025',
    sent: '2025-01-20',
    opens: 165,
    clicks: 45,
    status: 'Enviado'
  },
  {
    id: 3,
    title: 'Lembrete do evento - Piquenique da Igreja',
    sent: '2025-01-18',
    opens: 158,
    clicks: 62,
    status: 'Enviado'
  },
];

export function Communications() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1>Comunicações</h1>
          <p className="text-muted-foreground">
            Gerenciar anúncios, boletins informativos e comunicações com Membros.
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Enviar boletim informativo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Enviar Boletim Informativo</DialogTitle>
                <DialogDescription>
                  Crie e envie um boletim informativo para todos os membros.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject" className="text-right">
                    Assunto
                  </Label>
                  <Input id="subject" placeholder="Newsletter subject" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="content" className="text-right">
                    Conteúdo
                  </Label>
                  <Textarea id="content" placeholder="Newsletter content..." className="col-span-3 min-h-[100px]" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Salvar Rascunho</Button>
                <Button>Enviar Boletim Informativo</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Novo Anúncio
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Novo Anúncio</DialogTitle>
                <DialogDescription>
                  Crie um novo anúncio para a Congregação.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Título
                  </Label>
                  <Input id="title" placeholder="Título do Anúncio" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="message" className="text-right">
                    Mensagem
                  </Label>
                  <Textarea id="message" placeholder="Conteúdo do Anúncio..." className="col-span-3 min-h-[100px]" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Salvar Rascunho</Button>
                <Button>Publicar Anúncio</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Estatísticas de comunicação */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de anúncios</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Este Mês</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Boletins informativos enviados</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Este Mês</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de abertura de e-mail</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86%</div>
            <p className="text-xs text-muted-foreground">acima da média</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Destinatários ativos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">165</div>
            <p className="text-xs text-muted-foreground">89% dos membros</p>
          </CardContent>
        </Card>
      </div>

      {/* Anúncios Recentes */}
      <Card>
        <CardHeader>
          <CardTitle>Anúncios Recentes</CardTitle>
          <CardDescription>Últimos anúncios e atualizações</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="flex items-start justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{announcement.title}</h4>
                    <Badge variant="outline">{announcement.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{announcement.content}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(announcement.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {announcement.recipients} destinatários
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    Editar
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Desempenho do boletim informativo */}
      <Card>
        <CardHeader>
          <CardTitle>Desempenho do boletim informativo</CardTitle>
          <CardDescription>Acompanhe o engajamento e o desempenho dos seus e-mails.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {newsletters.map((newsletter) => (
              <div key={newsletter.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{newsletter.title}</div>
                  <div className="text-sm text-muted-foreground">
                    Enviado {new Date(newsletter.sent).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <div className="font-medium">{newsletter.opens}</div>
                    <div className="text-muted-foreground">Abertos</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{newsletter.clicks}</div>
                    <div className="text-muted-foreground">Clicks</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {newsletter.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}