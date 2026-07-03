import requests
import xml.etree.ElementTree as ET

def search_ncbi_dna_sequence(dna_sequence):
    # NCBI E-utilities base URL
    base_url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
    
    # 1. ESearch: Find UIDs for the given DNA sequence
    # The 'term' parameter is where you put your search query.
    # Using 'nucleotide' database and XML format for parsing UIDs.
    esearch_url = f"{base_url}esearch.fcgi?db=nucleotide&term={dna_sequence}&retmode=xml"
    
    print(f"Searching NCBI for DNA sequence: {dna_sequence}")
    print(f"ESearch URL: {esearch_url}")
    
    try:
        esearch_response = requests.get(esearch_url)
        esearch_response.raise_for_status() # Raise an exception for HTTP errors
        
        root = ET.fromstring(esearch_response.content)
        
        # Extract UIDs (Unique Identifiers) from the XML response
        id_list = [element.text for element in root.findall('.//IdList/Id')]
        
        if not id_list:
            print("No matching sequences found.")
            return
            
        print(f"Found {len(id_list)} matching UIDs: {', '.join(id_list)}")
        
        # 2. EFetch: Retrieve the actual sequence data using the UIDs
        # We'll fetch in FASTA format for easy viewing.
        id_string = ",".join(id_list)
        efetch_url = f"{base_url}efetch.fcgi?db=nucleotide&id={id_string}&rettype=fasta&retmode=text"
        
        print(f"EFetch URL: {efetch_url}")
        
        efetch_response = requests.get(efetch_url)
        efetch_response.raise_for_status()
        
        print("\n--- Retrieved DNA Sequences (FASTA format) ---")
        print(efetch_response.text)
        
    except requests.exceptions.RequestException as e:
        print(f"An error occurred during the API request: {e}")
    except ET.ParseError as e:
        print(f"Error parsing XML response: {e}")




search_sequence = input("Provide a DNA sequence? ")
search_ncbi_dna_sequence(search_sequence)