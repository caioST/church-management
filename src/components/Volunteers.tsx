import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { HandHeart, Users, Calendar, Clock, Plus, Mail, Phone } from 'lucide-react';

const volunteers = [
  {
    id: 1,
    name: 'Caio da Silva',
    email: 'caio.silva@email.com',
    phone: '(55) 12345-4567',
    ministry: 'Ministério Jovem',
    role: 'Líder',
    hours: 12,
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Sarah Oliveira',
    email: 'sarah.oliveira@email.com',
    phone: '(55) 23445-5678',
    ministry: 'Ministério de Música',
    role: 'Coordenador',
    hours: 8,
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9a5b78c?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Rodrigo Silva',
    email: 'rodrigo.silva@email.com',
    phone: '(55) 34545-6789',
    ministry: 'Ministério Infantil',
    role: 'Ajudante',
    hours: 6,
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'Ana Clara',
    email: 'ana@email.com',
    phone: '(55) 45645-7890',
    ministry: 'Departamento de Comunicação',
    role: 'Coordenador',
    hours: 15,
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
  },
];

const schedules = [
  { id: 1, volunteer: 'Caio da Silva', ministry: 'Ministério Jovem', date: '2025-01-28', time: '6:00 PM - 8:00 PM' },
  { id: 2, volunteer: 'Sarah Oliveira', ministry: 'Ministério de Música', date: '2025-01-28', time: '9:00 AM - 11:00 AM' },
  { id: 3, volunteer: 'Rodrigo Silva', ministry: 'Ministério Infantil', date: '2025-01-28', time: '10:00 AM - 12:00 PM' },
  { id: 4, volunteer: 'Ana Clara', ministry: 'Departamento de Comunicação', date: '2025-02-01', time: '9:00 AM - 1:00 PM' },
];

export function Volunteers() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1>Voluntários</h1>
          <p className="text-muted-foreground">
            Gerenciar escalas e atribuições de voluntários
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Voluntário
        </Button>
      </div>

      {/* Volunteer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Voluntários</CardTitle>
            <HandHeart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+5 neste mês</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ativos na semana</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">67% total</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas Totais</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">nesta semana</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ministros</CardTitle>
            <HandHeart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">programas ativos</p>
          </CardContent>
        </Card>
      </div>

      {/* Volunteer List */}
      <Card>
        <CardHeader>
          <CardTitle>Volunteer Directory</CardTitle>
          <CardDescription>Manage volunteer information and assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Voluntário</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Ministério</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Horas nesta semana</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {volunteers.map((volunteer) => (
                <TableRow key={volunteer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={volunteer.avatar} />
                        <AvatarFallback>
                          {volunteer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{volunteer.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3" />
                        {volunteer.email}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3" />
                        {volunteer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{volunteer.ministry}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{volunteer.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {volunteer.hours}h
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800">
                      {volunteer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Volunteer Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Cronograma de voluntariado</CardTitle>
          <CardDescription>Próximas oportunidades de voluntariado</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {schedules.map((schedule) => (
              <div key={schedule.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{schedule.volunteer}</div>
                  <div className="text-sm text-muted-foreground">{schedule.ministry}</div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(schedule.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {schedule.time}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}