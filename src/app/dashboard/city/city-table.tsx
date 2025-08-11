'use client'
import AITable from '@/components/table/ATable'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tooltip } from '@/components/ui/tooltip'
import { ICity } from '@/types/type'
import Link from 'next/link'
import { use } from 'react'

export default function CityTable({ city }: { city: Promise<ICity[]> }) {
    const cityList = use(city)
    return (
        <Card className="border-none">
            <AITable
                actions={() => (
                    <div className="flex space-x-2 gap-2">
                        <Tooltip>
                            <Button
                                asChild
                                variant="outline"
                                className="border-primary text-primary text-xs"
                            >
                                <Link href="#">ویرایش</Link>
                            </Button>
                        </Tooltip>
                        <Tooltip>
                            <Button
                                asChild
                                variant="outline"
                                className="text-red-500 text-xs"
                            >
                                <Link href="#">حذف</Link>
                            </Button>
                        </Tooltip>
                    </div>
                )}
                data={cityList}
                schema={[
                    {
                        title: 'نام شهر',
                        render: (row) => row.name,
                    },
                    {
                        title: 'وضعیت',
                        render: (row) =>
                            row.isActive === true ? 'فعال' : 'غیرفعال',
                    },
                ]}
            />
        </Card>
    )
}
