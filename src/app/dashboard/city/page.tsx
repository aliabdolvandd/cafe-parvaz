import { getCity } from '@/api/city'
import { TableContainer } from '@/components/table/tableContainer'
import { ServerPageProps } from '@/types/type'
import CityTable from './city-table'

export default async function CityPage({ searchParams }: ServerPageProps) {
    const params = await searchParams
    const city = getCity(params)
    return (
        <TableContainer title="" pageTitle="لیست شهر ها">
            <CityTable city={city} />
        </TableContainer>
    )
}
