param(
    [string]$ProfilePath,
    [string]$WorldName,
    [string]$StructureId
)

$ErrorActionPreference = 'Stop'

function Read-RequiredValue {
    param(
        [string]$CurrentValue,
        [string]$Prompt
    )

    if (-not [string]::IsNullOrWhiteSpace($CurrentValue)) {
        return $CurrentValue.Trim().Trim('"')
    }

    do {
        $value = (Read-Host $Prompt).Trim().Trim('"')
    } while ([string]::IsNullOrWhiteSpace($value))

    return $value
}

try {
    Write-Host ''
    Write-Host 'Proper Infinite Horizons - Structure Importer' -ForegroundColor Cyan
    Write-Host 'Save the structure in-game and exit the world before importing it.'
    Write-Host ''

    $ProfilePath = Read-RequiredValue $ProfilePath 'CurseForge profile folder'
    $WorldName = Read-RequiredValue $WorldName 'Structure-lab world folder name'
    $StructureId = Read-RequiredValue $StructureId 'Structure ID (example: proper_horizon:collapsed_workshop/belt_gap)'

    $ProfilePath = [System.IO.Path]::GetFullPath($ProfilePath)
    $RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

    if (-not (Test-Path -LiteralPath (Join-Path $ProfilePath 'mods') -PathType Container)) {
        throw "That folder does not look like a CurseForge profile because it has no mods folder: $ProfilePath"
    }

    $parts = $StructureId.Split(':', 2)
    if ($parts.Count -ne 2 -or [string]::IsNullOrWhiteSpace($parts[0]) -or [string]::IsNullOrWhiteSpace($parts[1])) {
        throw 'The structure ID must use namespace:path format.'
    }

    $namespace = $parts[0].Trim()
    $relativeName = $parts[1].Trim().Replace('/', [System.IO.Path]::DirectorySeparatorChar)

    if ($namespace -ne 'proper_horizon') {
        throw "Use the proper_horizon namespace for pack structures. Received: $namespace"
    }

    if ($relativeName -match '(^|[\\/])\.\.([\\/]|$)') {
        throw 'The structure path may not contain .. segments.'
    }

    $sourceRoot = Join-Path $ProfilePath "saves\$WorldName\generated\$namespace\structures"
    $sourceFile = Join-Path $sourceRoot ($relativeName + '.nbt')
    $destinationRoot = Join-Path $RepoRoot "kubejs\data\$namespace\structures"
    $destinationFile = Join-Path $destinationRoot ($relativeName + '.nbt')

    if (-not (Test-Path -LiteralPath $sourceFile -PathType Leaf)) {
        throw "Saved structure not found:`n$sourceFile`n`nCheck the world folder name and the name entered in the structure block."
    }

    $destinationDirectory = Split-Path -Parent $destinationFile
    New-Item -ItemType Directory -Path $destinationDirectory -Force | Out-Null
    Copy-Item -LiteralPath $sourceFile -Destination $destinationFile -Force

    $size = (Get-Item -LiteralPath $destinationFile).Length
    $repoRelative = [System.IO.Path]::GetRelativePath($RepoRoot, $destinationFile)

    Write-Host ''
    Write-Host 'Imported successfully.' -ForegroundColor Green
    Write-Host "Source:      $sourceFile"
    Write-Host "Destination: $repoRelative"
    Write-Host "Size:        $size bytes"
    Write-Host ''
    Write-Host 'The template is now in the repository, but it will not generate until its template pool, structure, structure set, biome placement, and loot are registered.' -ForegroundColor Yellow
}
catch {
    Write-Host ''
    Write-Host "Import failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
