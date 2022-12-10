export default interface Paste {
    title: string;
    text: string;
    id?: number | null;
    date?: number | null;
    uuid?: string | null;
    captcha?: string | null;
    deletekey?: string | null;
}