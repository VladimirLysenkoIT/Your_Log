import React from 'react'


export const useHttp = () => {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const request = React.useCallback( async (url, method = 'GET', body = null, headers= {}) => {
        setLoading(true)
        try{
            if (body !== null) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()
            data['ok'] = response.ok
            console.log(data);
            if (!response.ok) {
                throw new Error(data.message || 'Somethins went wrong')
            }

            setLoading(false)

            return data
        }catch(error){
            setLoading(true)
            setError(error.message)
            throw error
        }
    }, [])

    const clearError = () => setError(null)

    return {loading, request, error, clearError}
}