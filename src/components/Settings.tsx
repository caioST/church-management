import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Settings as SettingsIcon, Church, Users, Mail, /*Shield*/ Database, /*Globe*/ } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1>Configurações</h1>
        <p className="text-muted-foreground">
          Gerenciar informações da igreja e preferências do sistema
        </p>
      </div>

      {/* Informações da Igreja */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Church className="h-5 w-5" />
            Dados da Igreja
          </CardTitle>
          <CardDescription>
            Informações básicas sobre a sua igreja
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="church-name">Nome da Igreja</Label>
              <Input id="church-name" defaultValue="Assembleia de Deus Lapa - Matriz" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pastor-name">Pastor Dirigente</Label>
              <Input id="pastor-name" defaultValue="Pr. Charles Oliveira" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Endereço</Label>
            <Textarea id="address" defaultValue="Rua Joaquim SIlva, 52 - Lapa" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" defaultValue="(555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="info@adlapa.org" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" defaultValue="https://adlapa.org" />
          </div>
          
          <Button>Salvar Informações</Button>
        </CardContent>
      </Card>

      {/* User Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
              Gerenciamento de usuários
          </CardTitle>
          <CardDescription>
            Gerenciar usuários e permissões do sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="admin-name">Administrador</Label>
              <Input id="admin-name" defaultValue="Caio Silva" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-email">Admin Email</Label>
              <Input id="admin-email" type="email" defaultValue="admin@gracecommunity.org" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="user-role">Função de usuário padrão</Label>
            <Select defaultValue="member">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrador</SelectItem>
                <SelectItem value="staff">Staff Membro</SelectItem>
                <SelectItem value="volunteer">Voluntário</SelectItem>
                <SelectItem value="member">Membro</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button>Atualizar configurações do usuário</Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Configurações de Notificação
          </CardTitle>
          <CardDescription>
            Gerenciar preferências de notificação
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="email-notifications">Notificações de Email</Label>
              <p className="text-sm text-muted-foreground">
                Receba notificações por e-mail sobre eventos do sistema.
              </p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="member-notifications">Notificações de novos membros</Label>
              <p className="text-sm text-muted-foreground">
                Receba notificações quando novos membros se inscreverem.
              </p>
            </div>
            <Switch id="member-notifications" defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="donation-notifications">Notificações de doação</Label>
              <p className="text-sm text-muted-foreground">
                Receba notificações sobre novas doações.
              </p>
            </div>
            <Switch id="donation-notifications" defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="event-notifications">Notificações de eventos</Label>
              <p className="text-sm text-muted-foreground">
                Receba notificações sobre os próximos eventos.
              </p>
            </div>
            <Switch id="event-notifications" defaultChecked />
          </div>
          
          <Button>Salvar configurações de notificação</Button>
        </CardContent>
      </Card>

      {/* System Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            Configurações do Sistema
          </CardTitle>
          <CardDescription>
            COnfigurações gerais do sistema e preferências
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="timezone">Time Zone</Label>
              <Select defaultValue="est">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="est">Eastern Standard Time</SelectItem>
                  <SelectItem value="cst">Central Standard Time</SelectItem>
                  <SelectItem value="mst">Mountain Standard Time</SelectItem>
                  <SelectItem value="pst">Pacific Standard Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-format">Formato da Data</Label>
              <Select defaultValue="mdy">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-backup">Backup Automático</Label>
              <p className="text-sm text-muted-foreground">
                Faça backup automático dos dados diariamente.
              </p>
            </div>
            <Switch id="auto-backup" defaultChecked />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="member-portal">Portal de membros</Label>
              <p className="text-sm text-muted-foreground">
                Permitir que os membros acessem suas informações online.
              </p>
            </div>
            <Switch id="member-portal" defaultChecked />
          </div>
          
          <Button>Salvar configurações do sistema</Button>
        </CardContent>
      </Card>

      {/* Data Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Gerenciamento de dados
          </CardTitle>
          <CardDescription>
            Fazer backup e restaurar dados do sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Backup de banco de dados</h4>
              <p className="text-sm text-muted-foreground">
                Último backup: 26 de janeiro de 2025 às 2h00.
              </p>
            </div>
            <Button variant="outline">Criar backup</Button>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Exportação de dados</h4>
              <p className="text-sm text-muted-foreground">
                Exportar dados de membros e doações
              </p>
            </div>
            <Button variant="outline">Exportar dados</Button>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Reinicialização do sistema</h4>
              <p className="text-sm text-muted-foreground">
                Reset all system settings to default
              </p>
            </div>
            <Button variant="destructive">Redefinir sistema</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}