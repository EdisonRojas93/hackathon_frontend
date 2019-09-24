export interface IFeedback{
    name?:string,
    position?: string,
    user_id?: string,
    comments?: string,
    score?: IScore[],
    sender?: string,
    area?: string;
}

export interface IScore{
    score_id: string;
    score: number;
    description: string;
}