import { ReactNode, SetStateAction } from "react"

export type MyTasks = {
    id: number,
    title: string,
    term: string,
    label_1:string,
    label_2:string,
    stage: string
}

export type MyTasksCardProps = {
    id: number,
    title: string,
    term: string,
    label_1:string,
    label_2:string,
    avatar: React.SVGAttributes<ReactNode>
}