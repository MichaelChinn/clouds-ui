import React from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "destructive" | "outline";
    size?: "sm" | "default" | "lg" | "icon";
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string;
    error?: string;
    size?: "sm" | "default" | "lg";
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    onClear?: () => void;
    shortcutKey?: string;
}
declare const SearchInput: React.ForwardRefExoticComponent<SearchInputProps & React.RefAttributes<HTMLInputElement>>;

interface ToggleProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>;

interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "primary" | "success" | "warning" | "destructive" | "info" | "outline";
}
declare function Badge({ variant, className, style, children, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;
declare namespace Badge {
    var displayName: string;
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function Card({ className, style, children, ...props }: CardProps): react_jsx_runtime.JSX.Element;
declare namespace Card {
    var displayName: string;
}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function CardHeader({ className, style, children, ...props }: CardHeaderProps): react_jsx_runtime.JSX.Element;
declare namespace CardHeader {
    var displayName: string;
}
interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function CardBody({ className, style, children, ...props }: CardBodyProps): react_jsx_runtime.JSX.Element;
declare namespace CardBody {
    var displayName: string;
}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function CardFooter({ className, style, children, ...props }: CardFooterProps): react_jsx_runtime.JSX.Element;
declare namespace CardFooter {
    var displayName: string;
}

interface IntegrationCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
}
declare function IntegrationCard({ icon, title, description, action, className, style, children, ...props }: IntegrationCardProps): react_jsx_runtime.JSX.Element;
declare namespace IntegrationCard {
    var displayName: string;
}

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
}
interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
}
interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare function ModalHeader({ className, style, children, ...props }: ModalHeaderProps): react_jsx_runtime.JSX.Element;
declare namespace ModalHeader {
    var displayName: string;
}
declare function ModalBody({ className, style, children, ...props }: ModalBodyProps): react_jsx_runtime.JSX.Element;
declare namespace ModalBody {
    var displayName: string;
}
declare function ModalFooter({ className, style, children, ...props }: ModalFooterProps): react_jsx_runtime.JSX.Element;
declare namespace ModalFooter {
    var displayName: string;
}
declare function Modal({ open, onClose, children, className, style }: ModalProps): React.ReactPortal | null;
declare namespace Modal {
    var displayName: string;
}

interface DataTableColumn<T> {
    key: string;
    header: string;
    sortable?: boolean;
    render?: (value: unknown, row: T, index: number) => React.ReactNode;
    width?: string;
    align?: "left" | "center" | "right";
}
interface DataTableProps<T> {
    columns: DataTableColumn<T>[];
    data: T[];
    rowKey: (row: T, index: number) => string | number;
    selectable?: boolean;
    selectedKeys?: Set<string | number>;
    onSelectionChange?: (keys: Set<string | number>) => void;
    onSort?: (key: string, direction: "asc" | "desc") => void;
    emptyMessage?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
declare function DataTable<T>({ columns, data, rowKey, selectable, selectedKeys, onSelectionChange, onSort, emptyMessage, className, style, }: DataTableProps<T>): react_jsx_runtime.JSX.Element;
declare namespace DataTable {
    var displayName: string;
}

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
}
declare function Sidebar({ className, style, children, ...props }: SidebarProps): react_jsx_runtime.JSX.Element;
declare namespace Sidebar {
    var displayName: string;
}

interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    label: string;
    active?: boolean;
    badge?: number | string;
}
declare const SidebarItem: React.ForwardRefExoticComponent<SidebarItemProps & React.RefAttributes<HTMLButtonElement>>;

interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
}
declare function TopNav({ left, center, right, className, style, children, ...props }: TopNavProps): react_jsx_runtime.JSX.Element;
declare namespace TopNav {
    var displayName: string;
}

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    actions?: React.ReactNode;
}
declare function PageHeader({ title, description, actions, className, style, ...props }: PageHeaderProps): react_jsx_runtime.JSX.Element;
declare namespace PageHeader {
    var displayName: string;
}

interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant: "online" | "offline" | "warning" | "error";
    label?: string;
}
declare function StatusIndicator({ variant, label, className, style, ...props }: StatusIndicatorProps): react_jsx_runtime.JSX.Element;
declare namespace StatusIndicator {
    var displayName: string;
}

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    initials?: string;
    size?: "sm" | "md" | "lg" | "xl";
}
declare function Avatar({ src, alt, initials, size, className, style, ...props }: AvatarProps): react_jsx_runtime.JSX.Element;
declare namespace Avatar {
    var displayName: string;
}

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "info" | "success" | "warning" | "destructive";
    dismissable?: boolean;
    onDismiss?: () => void;
}
declare function Alert({ variant, dismissable, onDismiss, className, style, children, ...props }: AlertProps): react_jsx_runtime.JSX.Element | null;
declare namespace Alert {
    var displayName: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;

interface TooltipProps {
    content: React.ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    delay?: number;
    children: React.ReactElement;
    className?: string;
}
declare function Tooltip({ content, position, delay, children, className, }: TooltipProps): react_jsx_runtime.JSX.Element;
declare namespace Tooltip {
    var displayName: string;
}

export { Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, Button, type ButtonProps, Card, CardBody, type CardBodyProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, Checkbox, type CheckboxProps, DataTable, type DataTableColumn, type DataTableProps, Input, type InputProps, IntegrationCard, type IntegrationCardProps, Modal, ModalBody, type ModalBodyProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, PageHeader, type PageHeaderProps, SearchInput, type SearchInputProps, Select, type SelectProps, Sidebar, SidebarItem, type SidebarItemProps, type SidebarProps, StatusIndicator, type StatusIndicatorProps, Toggle, type ToggleProps, Tooltip, type TooltipProps, TopNav, type TopNavProps };
