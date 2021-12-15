/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * This is the message that will be displayed on the label
     */
    label: string;
    /**
     * This is the size of the lable
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * If allCaps is true, capitalize the label text
     */
    allCaps?: boolean;
    /**
     * Determines the color of the label text
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Determine the font color with a color picker
     */
    customFontColor?: string;
    /**
     * Allows you to choose the background color of the component
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, customFontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
