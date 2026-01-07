import { useEffect, useState } from "react";
import type { UserLocation } from "src/types/userLocation";


export function useUserLocation() {
    const [location, setLocation] = useState<UserLocation | null>(null);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocalização não é suportada pelo seu navegador.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            () => {
                setError("Não foi possível obter sua localização.");
            }
        );
    }, []);
    return { location, error };
}
