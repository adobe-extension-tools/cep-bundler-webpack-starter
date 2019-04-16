import { addEventListener } from 'cep-interface'

declare global {
    interface Window {
        isHooked: boolean;
    }
}

if (!window.isHooked) {
    addEventListener('CONSOLE_LOG', (e: any) => {
        console.log(...e.data)
    })
    addEventListener('CONSOLE_WARN', (e: any) => {
        console.warn(...e.data)
    })
    addEventListener('CONSOLE_ERROR', (e: any) => {
        console.error(...e.data)
    })
    window.isHooked = true
}