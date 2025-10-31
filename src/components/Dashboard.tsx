import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
//import { Badge } from '../assets/ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  //Church,
  UserPlus,
  CalendarDays,
  HandHeart,
  MessageSquare
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const membershipData = [
  { month: 'Jan', membros: 145 },
  { month: 'Fev', membros: 152 },
  { month: 'Mar', membros: 148 },
  { month: 'Abr', membros: 165 },
  { month: 'Mai', membros: 178 },
  { month: 'Jun', membros: 185 },
];

const donationData = [
  { category: 'Dízimos', amount: 12500, color: '#8884d8' },
  { category: 'Ofertas', amount: 3200, color: '#82ca9d' },
  { category: 'Doações Especiais', amount: 1800, color: '#ffc658' },
  { category: 'Fundo de Construção', amount: 2100, color: '#ff7c7c' },
];

const recentActivities = [
  { id: 1, type: 'member', message: 'Novo membro Caio da Silva registrado', time: '2 horas atrás' },
  { id: 2, type: 'event', message: 'Participantes do Culto de Domingo: 234 pessoas', time: '1 dia atrás' },
  { id: 3, type: 'donation', message: 'Meta mensal de doações atingida', time: '2 dias atrás' },
  { id: 4, type: 'volunteer', message: '5 novos voluntários se inscreveram para o ministério jovem', time: '3 dias atrás' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Painel da Igreja</h1>
        <p className="text-muted-foreground">
          Bem-vindo(a) de volta! Veja o que está acontecendo na Assembleia de Deus Lapa.
        </p>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Membros</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">185</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Doações deste Mês</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$19,600</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8.2% desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximos Eventos</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              3 esta semana
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Voluntários Ativos</CardTitle>
            <HandHeart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              +5 novos este mês
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cards Relatório */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Crescimento de Membros</CardTitle>
            <CardDescription>Tendências mensais de membros</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={membershipData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="membros" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Doações</CardTitle>
            <CardDescription>Detalhamento do mês atual</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={donationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="amount"
                >
                  {donationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>Últimas atualizações e notificações</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className=".flex-shrink-0 {flex-shrink: 0;}">
                    {activity.type === 'member' && <UserPlus className="h-4 w-4 text-blue-500" />}
                    {activity.type === 'event' && <CalendarDays className="h-4 w-4 text-green-500" />}
                    {activity.type === 'donation' && <DollarSign className="h-4 w-4 text-yellow-500" />}
                    {activity.type === 'volunteer' && <HandHeart className="h-4 w-4 text-purple-500" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Tarefas comuns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <UserPlus className="h-4 w-4 mr-2" />
              Adicionar Novo Membro
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Agendar Evento
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <DollarSign className="h-4 w-4 mr-2" />
              Registrar Doação
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Enviar Anúncio
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Ministry Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Progresso das Metas Ministeriais</CardTitle>
          <CardDescription>Objetivos do ano atual</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Meta de Membros</span>
                <span className="text-sm text-muted-foreground">185/200</span>
              </div>
              <Progress value={92.5} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Orçamento Anual</span>
                <span className="text-sm text-muted-foreground">$142k/$180k</span>
              </div>
              <Progress value={78.9} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Horas de Voluntariado</span>
                <span className="text-sm text-muted-foreground">1,240/1,500</span>
              </div>
              <Progress value={82.7} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Programa Jovem</span>
                <span className="text-sm text-muted-foreground">45/60</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


