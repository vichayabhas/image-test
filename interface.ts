import mongoose from "mongoose"

export interface ReceiveAirQuality {
    id: string,
    measurements: {
        hourly:
        {
            ts: string,//date
            aqi?: number,
            pm25?: {
                aqi: number,
                concentration: number
            }
        }[],
        daily:
        {
            ts: string,//date
            aqi?: number,
            pm25?: {
                aqi: number,
                concentration: number
            }
            pressure?: number,
            humidity?: number,
            wind?: {
                speed: number,
                direction: number
            },
            icon?: string,
            condition?: string,
            temperature?: {
                max: number,
                min: number
            },
        }[]
    }
}
export interface InterTimeOffset {
    userId: null,
    day: number,
    hour: number,
    minute: number,
    _id: null
}
export type Id=mongoose.Types.ObjectId