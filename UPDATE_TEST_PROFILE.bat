@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo Proper Infinite Horizons - Test Profile Updater
echo.

if not "%~1"=="" (
    set "PROFILE=%~1"
) else (
    echo Paste the full folder path of the duplicated CurseForge profile.
    echo Example: C:\Users\billy\curseforge\minecraft\Instances\Proper Infinite Horizons
    set /p "PROFILE=Profile folder: "
)

if not exist "%PROFILE%\mods" (
    echo.
    echo ERROR: That folder does not contain a mods folder.
    echo Open the duplicated profile in CurseForge, choose Open Folder, and use that path.
    pause
    exit /b 1
)

tasklist /FI "IMAGENAME eq javaw.exe" 2>NUL | find /I "javaw.exe" >NUL
if not errorlevel 1 (
    echo.
    echo ERROR: Minecraft appears to be running. Close it before updating the profile.
    pause
    exit /b 1
)

echo.
echo Pulling the latest redesign branch...
git pull --ff-only
if errorlevel 1 (
    echo WARNING: git pull failed. The updater will use the files already in this folder.
)

echo.
echo Disabling development-only mods in the playtest profile...
for %%F in ("%PROFILE%\mods\probejs*.jar") do (
    if exist "%%~fF" (
        ren "%%~fF" "%%~nxF.disabled"
        echo Disabled %%~nxF
    )
)

echo.
echo Removing stale quest definitions and scripts...
if exist "%PROFILE%\config\ftbquests" rmdir /S /Q "%PROFILE%\config\ftbquests"
if exist "%PROFILE%\kubejs" rmdir /S /Q "%PROFILE%\kubejs"

echo Copying current configuration...
robocopy "%~dp0config" "%PROFILE%\config" /E /R:1 /W:1 /NFL /NDL /NJH /NJS /NP >NUL
set "CONFIG_RESULT=%ERRORLEVEL%"

echo Copying current KubeJS pack data...
robocopy "%~dp0kubejs" "%PROFILE%\kubejs" /E /R:1 /W:1 /NFL /NDL /NJH /NJS /NP >NUL
set "KUBEJS_RESULT=%ERRORLEVEL%"

if %CONFIG_RESULT% GEQ 8 (
    echo ERROR: Configuration copy failed with Robocopy code %CONFIG_RESULT%.
    pause
    exit /b %CONFIG_RESULT%
)
if %KUBEJS_RESULT% GEQ 8 (
    echo ERROR: KubeJS copy failed with Robocopy code %KUBEJS_RESULT%.
    pause
    exit /b %KUBEJS_RESULT%
)

echo.
echo Update complete.
echo ProbeJS is disabled in the playtest profile so it cannot dump developer docs on world join.
echo The old quest chapters were removed before the new campaign was copied.
echo Launch the duplicated Proper Infinite Horizons profile from CurseForge.
pause
