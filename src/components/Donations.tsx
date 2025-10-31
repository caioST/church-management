import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
//import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../assets/ui/select';
import { DollarSign, TrendingUp, Calendar, Plus, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const donations = [
  { id: 1, donor: 'Caio da Silva', amount: 500, type: 'Dízimo', date: '2025-01-26', method: 'Transferência Bancária' },
  { id: 2, donor: 'Sarah Oliveira', amount: 250, type: 'Oferta', date: '2025-01-25', method: 'Dinheiro' },
  { id: 3, donor: 'Rodrigo Silva', amount: 1000, type: 'Fundo de Construção', date: '2025-01-24', method: 'Cheque' },
  { id: 4, donor: 'Ana Clara', amount: 150, type: 'Oferta', date: '2025-01-23', method: 'Online' },
  { id: 5, donor: 'David Costa', amount: 300, type: 'Doação Especial', date: '2025-01-22', method: 'Dinheiro' },
];

const monthlyData = [
  { month: 'Jan', dizimos: 12500, ofertas: 3200, construção: 2100, especial: 1800 },
  { month: 'Fev', dizimos: 13200, ofertas: 2800, construção: 1900, especial: 2200 },
  { month: 'Mar', dizimos: 11800, ofertas: 3500, construção: 2500, especial: 1600 },
  { month: 'Abr', dizimos: 14100, ofertas: 3100, construção: 2200, especial: 1900 },
  { month: 'Mai', dizimos: 13800, ofertas: 3400, construção: 2600, especial: 2100 },
  { month: 'Jun', dizimos: 12900, ofertas: 3000, construção: 2400, especial: 1700 },
];

export function Donations() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1>Doações e Finanças</h1>
          <p className="text-muted-foreground">
            Acompanhe doações, ofertas e contribuições financeiras
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar Relatório
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Registrar Doação
          </Button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mensal</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$19,600</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8.2% desde o mês passado
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dízimos</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$12,500</div>
            <p className="text-xs text-muted-foreground">64% do total</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ofertas</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$3,200</div>
            <p className="text-xs text-muted-foreground">16% do total</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fundo de Construção</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$2,100</div>
            <p className="text-xs text-muted-foreground">11% do total</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Doações Mensais</CardTitle>
            <CardDescription>Tendências de doações ao longo do tempo</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Bar dataKey="dizimos" fill="#8884d8" />
                <Bar dataKey="ofertas" fill="#82ca9d" />
                <Bar dataKey="construção" fill="#ffc658" />
                <Bar dataKey="especial" fill="#ff7c7c" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendências de Doação</CardTitle>
            <CardDescription>Comparativo mensal</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Line type="monotone" dataKey="dizimos" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="ofertas" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Donations */}
      <Card>
        <CardHeader>
          <CardTitle>Doações Recentes</CardTitle>
          <CardDescription>Últimos registros de doação</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doador</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Método</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell className="font-medium">{donation.donor}</TableCell>
                  <TableCell>${donation.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{donation.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(donation.date).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell>{donation.method}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      Ver
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}


